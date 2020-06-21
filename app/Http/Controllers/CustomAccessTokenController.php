<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Laravel\Passport\Http\Controllers\AccessTokenController;
use Psr\Http\Message\ServerRequestInterface;

class CustomAccessTokenController extends AccessTokenController
{
    public function issueUserToken(ServerRequestInterface $request)
    {
            $tokenResponse = parent::issueToken($request);
            $token = $tokenResponse->getContent();

            // $tokenInfo will contain the usual Laravel Passort token response.
            $tokenInfo = json_decode($token, true);

            // Then we just add the user to the response before returning it.
            $username = $request->getParsedBody()['username'];
            $user = User::with('roles')->find(User::whereEmail($username)->first()->id);
            $tokenInfo = collect($tokenInfo);
            $tokenInfo->put('user', $user);

            return $tokenInfo;
    }
}
