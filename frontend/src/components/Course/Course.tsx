import { useParams } from 'react-router-dom';
import styles from './Course.module.css'
import { useCourse } from './../../hooks/useCourse';
import freeIcon from './../../assets/free.png';
import paidIcon from './../../assets/paid.png';
import certificateIcon from './../../assets/certificate.png';
import YcertificateIcon from './../../assets/certificate_true.png';

const Course = () => {
  const { id } = useParams<{ id: string }>();

  const course = useCourse(id);

  // Check if course exists
  if (!course) {
    alert('Course not found');
    return null;
  }

  return (
    <div className={styles.courseInfo}>
      <section className={styles.imgNameContainer}>
        <img className={styles.courseImage} src={course.image} alt={course.name} />
        <h1 className={styles.courseTitle}>
          {course.name}
        </h1>
      </section>

      <section className={styles.courseDetail}>
        <h2 className={styles.provider}>provided by <b>{course.provider}</b></h2>

        <div className={styles.visuals}>
          <div className={styles.pricing}>
            <img src={course.pricing === 'free' ? freeIcon : paidIcon} />
            <p>{course.pricing}</p>
          </div>
          <div className={styles.certificate}>
            <img src={course.certificate_included ? YcertificateIcon : certificateIcon} />
            <p>{course.certificate_included ? 'Certificate Included' : 'Certificate not Included'}</p>
          </div>
        </div>

        <p className={styles.description}>{course.description}</p>

        <div className={styles.tagContainer}>
          {course.tags.map((tag: string, index: number) => (
            <li key={index} className={styles.tagItem}>
              #{tag}
            </li>
          ))}
        </div>

        <button className={styles.url} onClick={() => window.open(course.url, '_blank')}>Learn More</button>
      </section>
    </div>
  )
}

export default Course