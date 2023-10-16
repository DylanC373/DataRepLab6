import BookItem from "./BookItem"
function Books(props) {
    return props.myBooks.map(
        (book) => {
            return <BookItem myBooks={book}></BookItem>
        }
    );
}
export default Books;