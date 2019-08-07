import React, {Component} from 'react'
import {Text} from 'react-native'
import {CardSection} from './common'


class ListItem extends Component{
    render(){
        const {titleStyles, CardContainer} = styles

        return (
           <CardSection style={CardContainer}>
               <Text style={titleStyles}>{this.props.library.item.title}</Text>
           </CardSection>
        )
    }
}

const styles = {
    titleStyles: {
        fontSize: 18,
        marginLeft: 15,
        padding: 5
    },
    CardContainer: {
      
    }
}

export default ListItem;