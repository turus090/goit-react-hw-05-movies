import s from './reviews.module.scss';

const ReviewsItem = ({ author, content }) => {
  return (
    <li className={s.list_item}>
      <h2 className={s.list_item_author}> {author} </h2>
      <p className={s.list_item_text}> {content}</p>
    </li>
  );
};

export default ReviewsItem;
