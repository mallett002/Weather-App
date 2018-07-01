import React, { Component } from 'react';


const styles = {
    fontSize: '4em',
    color: '#2a2f60'
}

//Loading is just the word "Loading" with the "." being added every 300 ms
class Loading extends Component {
    state = {
        loading: '',
    }

    componentDidMount() {
        this.interval = window.setInterval(() => {
            if (this.state.loading === '...' ) {
                this.setState({
                    loading: ''
                });
            } else {
                this.setState((prevState) => ({
                    loading: prevState.loading + '.'
                }));
            }
        }, 300);
    }

    componentWillUnmount(){
        window.clearInterval(this.interval);
    }

    render() {
        const { loading } = this.state;

        return (
            <div style={{textAlign: 'center', marginTop: '2em'}}>
                <p style={styles}>LOADING{loading}</p>
            </div>
        )
    }
}

export default Loading;