// TODO
class GroceryListItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            done: false
        };
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }


    render(){

        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return(
            <li style={style} onClick = {this.onListItemClick.bind(this)}>{this.props.groceryItems}</li>
        )
    }
}


var GroceryList = (props) => {

    return (
        <ul>
            {props.groceryItems.map( grocery => 
                <GroceryListItem groceryItems={grocery}/>
            )}
        </ul>
    )
    
};

var App = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryList groceryItems={['Milk','Apple','Orange']}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'))