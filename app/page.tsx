import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { faCheckCircle, faEnvelope, faFlask, faGlobe, faPhone, faUniversity } from '@fortawesome/free-solid-svg-icons';
import LiTag from '@/components/LiTag';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-5xl mx-auto p-4 space-y-8">
        <Section id="about" title="👨‍🏫 من أنا؟">
          <p>
            أنا <strong>د/ عبدالله مقبل </strong>، صيدلي بخبرة سنوات في تدريس الكيمياء. أقدّم دروسًا وشروحات تفاعلية بأسلوب سهل
            ومبسّط لطلاب الثانوية والجامعات.
          </p>
        </Section>

        <Section id="services" title="💼 الخدمات">
          <ul className="space-y-2">
            <LiTag icon={faCheckCircle} title="شروحات تفاعلية ومبسّطة" />
            <LiTag icon={faCheckCircle} title="مراجعات شاملة واختبارات تحضيرية" />
            <LiTag icon={faCheckCircle} title="حل مسائل وتمارين مع شرح مفصّل" />
            <LiTag icon={faCheckCircle} title="دعم ومتابعة مستمرة للطلاب" />
            <LiTag icon={faCheckCircle} title="دروس أونلاين (Zoom / Google Meet)" />
            <LiTag icon={faCheckCircle} title="ورش عمل لتبسيط الكيمياء" />
          </ul>
        </Section>

        <Section id="curriculum" title="📚 المناهج">
          <ul className="space-y-2">
            <LiTag icon={faFlask} title="كيمياء (الثانوية العامة)" />
            <LiTag icon={faGlobe} title="الصف الثاني الثانوي" />
            <LiTag icon={faGlobe} title="الصف الثالث الثانوي" />
            <LiTag icon={faUniversity} title="كيمياء جامعية (أساسيات - عضوية)" />
          </ul>
        </Section>

        <Section id="contact" title="📞 تواصل معي">
          <p>للحجز أو الاستفسار، يمكنك التواصل عبر:</p>
          <div className="flex mr-4 space-x-4 text-2xl mt-4">
            <Link href="https://wa.me/201060619338" target="_blank" className="text-green-600 hover:text-teal-800">
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
            <Link href="mailto:abdullahmokbl0@gmail.com" className="text-red-600 hover:text-teal-800">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link href="tel:01060619338" className="text-blue-600 hover:text-teal-800">
              <FontAwesomeIcon icon={faPhone} />
            </Link>
          </div>
          <p>
            أو يمكنك الحجز من{' '}
            <Link href="/booking" className="text-teal-800">
              هنا
            </Link>
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}
