export const Book = (props) => {
    return (
<article>
    <h2>{props.title}</h2>
    <div>{props.description}</div>
    <footer>
        <span>Author: {props.author}</span>
        </footer>
</article>
    );
}