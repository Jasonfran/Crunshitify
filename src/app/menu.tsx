import * as React from "react"

export class Menu extends React.Component {

    props: {
        theatreMode: () => void
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="crunshitify-menu">
                <button onClick={this.props.theatreMode}>Theater mode</button>
            </div>
        )
    }
}