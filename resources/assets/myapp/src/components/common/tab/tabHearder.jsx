import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import If from '../../template/operators/if'
import {selectTab} from './tabActions'

class TabHeader extends Component{
    handleClick(e){
        e.preventDefault();
        this.props.selectTab(this.props.target)
    }
    render(){
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        
        return(
            <If test={visible}>
                <li className={'nav-item'}>
                    <a className={`nav-link ${selected ? ' active ':''}`} data-toggle='tab' onClick={(event) => this.handleClick(event)}
                    data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)