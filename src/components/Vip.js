import React from 'react';
// import Prifile from './Prifile'

class Vip extends React.Component {
    state = {
        Prifile: null
    }


    choosePrifile = () => {
        import ('./Prifile').then((mod)=>{
            this.setState({
                Prifile:mod.default
            })
        })
    }
    render() {
        const  {Prifile:Prifile1} =this.state
        return (
            <div>
                Vip321231
               
                {
                    Prifile1 !==null ? <Prifile1/> :  <button onClick={() => this.choosePrifile()}>aaaa</button>
                }
            </div>
        )
    }
}

export default Vip