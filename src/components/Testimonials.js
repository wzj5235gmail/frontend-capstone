import TestimonialCard from "./TestimonialCard";
import user1 from '../assets/user-1.jpg';
import user2 from '../assets/user-2.jpg';
import user3 from '../assets/user-3.jpg';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-contents">
        <h2>Testimonials</h2>
        <div className="flex">
          <TestimonialCard userImg={user1} userName={'Emily Johnson'} review={
            'The ambiance at Little Lemon is cozy, and their lemon chicken is absolutely to die for!'
          } />
          <TestimonialCard userImg={user2} userName={'Michael Smith'} review={
            'Little Lemon never disappoints! Their fresh ingredients and friendly staff make every visit a delight.'
          } />
          <TestimonialCard userImg={user3} userName={'Sarah Brown'} review={
            'I love the innovative lemon desserts at Little Lemon. It’s a unique and tasty experience!'
          } />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;