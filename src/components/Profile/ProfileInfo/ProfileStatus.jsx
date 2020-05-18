import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status:'hi man'
    }

    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }
    onChangeText=(e)=>{
        this.setState({
            status:e.target.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.state.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type='text' autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} 
                        onChange={this.onChangeText} />
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus