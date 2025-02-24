import { useParams } from 'react-router-dom';
import styles from './Course.module.css'
import { useCourse } from './../../hooks/useCourse'

const Course = () => {
  const { id } = useParams<{ id: string }>();

  const course = useCourse(id);

  // Check if course exists
  if (!course) {
    alert('Course not found');
    return null;
  }

  return (
    <div className={styles.courseDetail}>
      <h2>{course.name}</h2>
      <img src={course.image} alt={course.name} />
      <p>Provider: {course.provider}</p>
      <p>Pricing: {course.pricing}</p>
      <p>Tags: {course.tags.join(', ')}</p>
      <p>Certificate Included: {course.certificate_included ? 'Yes' : 'No'}</p>
      <a href={course.url}>Learn More</a>
    </div>
  )
}

export default Course