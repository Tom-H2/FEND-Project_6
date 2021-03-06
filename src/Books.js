// Display book image, title, author and picklist to page
// import React 
import React, {Component} from 'react'


class Books extends Component {

	// render each book and display certain fields (cover image, title, author)
	render() {

		// note some books have more than one author
		// check for more than one author and add comma/space between
		const authorsPrintOut = this.props.book.authors ? this.props.book.authors.join(", ") : ""

		return (
			<div className="book">
				<div className="book-top">
					<div key={this.props.book.id} className="book-cover" style={{ width: 128, height: 193,
						backgroundImage: this.props.book.imageLinks ?
		      			`url(${this.props.book.imageLinks.smallThumbnail})`:
		      			'url("./img/not-available.jpg")'}}>
		      		</div>						
		            <div className="book-shelf-changer">
		              <select onChange={(event) => this.props.shelfChanger(this.props.book, event.target.value)} value={this.props.book.shelf}>
		                <option value="move" disabled>Move to...</option>
		                <option value="currentlyReading">Currently Reading</option>
		                <option value="wantToRead">Want to Read</option>
		                <option value="read">Read</option>
		                <option value="none">None</option>
		              </select>
		            </div>
		    	</div>
		    	<div className="book-title">{this.props.book.title}</div>	
				<div className="book-authors">{authorsPrintOut}</div>		
			</div>
		)
	}
}     			

export default Books