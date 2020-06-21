<?php

namespace App\Http\Controllers;

use App\BillingCycle;
use App\Credit;
use App\Debt;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class BillingCycleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware(['auth:api', 'cors']);
    }
    public function index()
    {
        $billingCycle = new BillingCycle();
        $data = $billingCycle::with(['credits', 'debts'])->get();
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:billing_cycles',
            'month' => 'required|integer',
            'year' => 'required|integer'
        ]);

        $billingCycle = new BillingCycle();
        $billingCycle->name = $request->name;
        $billingCycle->month = $request->month;
        $billingCycle->year = $request->year;
        $billingCycle->save();

        $credits = [];

        if (!empty($request->credits)) {
            foreach ($request->credits as $c) {
                if (!empty($c)) {
                    $credits[] = new Credit(
                        [
                            'name' => $c['name'],
                            'value' => $c['value']
                        ]
                    );
                }
            }
            $billingCycle->credits()->saveMany($credits);
        }


        $debts = [];

        if (!empty($request->debts)) {
            foreach ($request->debts as $d) {
                if (!empty($d)) {
                    $debts[] = new Debt(
                        [
                            'name' => $d['name'],
                            'value' => $d['value']
                        ]
                    );
                }
            }
            $billingCycle->debts()->saveMany($debts);
        }
    }

  


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required|string|max:255|' . Rule::unique('billing_cycles')->ignore($id),
            'month' => 'required|integer',
            'year' => 'required|integer'
        ]);


        $billingCycle = BillingCycle::find($id);

        if (isset($billingCycle)) {



            $billingCycle->name = $request->name;
            $billingCycle->month = $request->month;
            $billingCycle->year = $request->year;
            $billingCycle->save();

            $billingCycle->credits()->delete();
            $billingCycle->debts()->delete();

            $credits = [];

            if (!empty($request->credits)) {
                foreach ($request->credits as $c) {
                    if (!empty($c)) {
                        $credits[] = new Credit(
                            [
                                'name' => $c['name'],
                                'value' => $c['value']
                            ]
                        );
                    }
                }
                $billingCycle->credits()->saveMany($credits);
            }


            $debts = [];

            if (!empty($request->debts)) {
                foreach ($request->debts as $d) {
                    if (!empty($d)) {
                        $debts[] = new Debt(
                            [
                                'name' => $d['name'],
                                'value' => $d['value']
                            ]
                        );
                    }
                }
                $billingCycle->debts()->saveMany($debts);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $billingCycle = BillingCycle::find($id);

        if (isset($billingCycle)) {
            $billingCycle->credits()->delete();
            $billingCycle->debts()->delete();
            $billingCycle->delete();
        }
    }
}
