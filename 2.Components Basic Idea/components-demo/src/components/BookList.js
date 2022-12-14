import { Book } from "./Book";

export const BookList = (props) => {
    return (
<ul>  
    <li>
    <Book 
    title={props.books[0].title}
    author={props.books[0].author}
    description={props.books[0].description}
    />
    </li>
    <li>
     <Book 
     title={props.books[1].title}
    author={props.books[1].author}
    description={props.books[1].description}
    />
    </li>
</ul>
    );
}