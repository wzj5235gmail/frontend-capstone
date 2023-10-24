import img from '../assets/Mario and Adrian.png';

const Story = () => {
  return (
    <div className="story flex">
      <div className="words">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Mario and Adrian, childhood pals with a shared passion for culinary artistry, turned their dreams into reality with Little Lemon Restaurant. From lemonade stands to gourmet kitchens, their friendship and culinary prowess have blossomed. Today, their innovative dishes captivate diners, embodying the enduring flavors of their friendship.</p>
      </div>
      <div className="img">
        <img src={img} alt="Mario and Adrian A" height={300}/>
      </div>
    </div>
  )
}

export default Story;