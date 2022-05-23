import React  from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import image11 from '../Images/image1.jpg';
import image22 from '../Images/image2.jpg';
import image33 from '../Images/image3 .jpg';
import image34 from '../Images/image4.jpg';

import Figure from 'react-bootstrap/Figure'
// import image3 from '../Images/image3.jpg';

const Body = () => {
  return (
  <>
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image11}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image22}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image33}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>      
    </div>
{/* 
 <div>
 function AlertDismissible() {
      const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

  render(<AlertDismissible />);
     </div> */}
<div >
<Figure className="figure1">
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={image34}
  />
  <Figure.Caption>
  According to Mishr, it is believed that Adi Shankaracharya established four mutts: Badrikashram Jyotirpeeth in the north, Dwarka's Shardha Peeth in the west, Govardhan Peetha in Puri in the east, and Sringeri Sharada Peetham in Chikkamagalur district, Karnataka.
  </Figure.Caption>
</Figure>
</div>
<div>
<ListGroup as="ul">
  <ListGroup.Item as="li" active>
  History of Vaishno Mata
  Legend has it that Mata Vaishno Devi had incarnated as a beautiful princess in Treta Yuga as a Shakti of Mother Parvati, Saraswati and Lakshmi for the welfare of mankind
  </ListGroup.Item>
  <ListGroup.Item as="li" active>What is a Jyotirling? <p>Param Pujya Dadashri described, “What people generally refer to as a Jyotirling is at a physical level. Further than that, there are subtle and even subtler levels. Lastly, there is the subtle-most level of it - and that is the Self.”
   </p></ListGroup.Item>

  <ListGroup.Item as="li" active>
  Interesting Facts About Lord Hanuman <p>The Hanuman Chalisa mentioned the distance between the Sun and the Earth long before science did. This also proves the scientific and fact oriented saga of Lord Hanuman.</p>
  </ListGroup.Item>
  <ListGroup.Item as="li" active>What is the miracle of Lord Venkateswara? <p>An amazing miracle happened at the midnight of 7th November 1979 at Tirumala Tirupati Temple. At that time, the whole town of Tirumala was in a deep sleep.

  Suddenly, the huge bronze bells, that were hanging in front of Lord Venkateswara inside the Sanctum, started to ring loudly on their own without anyone touching them. The sound of the Bronze bells shocked the Purohits, security staff, temple staff, and the pilgrims.</p>
</ListGroup.Item>
</ListGroup>
</div>
    </>
  )
}

export default Body