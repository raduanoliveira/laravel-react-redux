import React, { Component } from 'react';
import Grid from '../template/layout/grid'
import Row from '../template/layout/row'

class Content extends Component {
    render() {
        const { title } = this.props
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                            <Row property='mb-2'>
                                <Grid cols="12 6">
                                    <h1>{title}</h1>
                                </Grid>
                            


                            <Grid cols="12 6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/" onClick={(event) => event.preventDefault()}>Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Blank Page</li>
                                </ol>
                            </Grid>
                       
                        </Row>
                    </div>
                </section>

                <section className="content">{this.props.children}</section>
            </div>
        )
    }
}
export default Content