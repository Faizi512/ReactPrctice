class Square extends React.Component{
    render(){
        return(
            <button className = "square" onClick={function(){alert('clicked');}}>{this.props.vlue}</button>
        )
    }
}
export default Square;