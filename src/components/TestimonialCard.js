const TestimonialCard = ({userImg, userName, review}) => {
  return (
    <div className="testimonial-card flex column">
      <div className="rating flex">
        <span>Rating</span>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <div className="user flex">
        <img src={userImg} alt="user" height={47} width={47} />
        <span className="name">{userName}</span>
      </div>
      <p>{review}</p>
    </div>
  )
}

export default TestimonialCard;