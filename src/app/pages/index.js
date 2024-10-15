import Head from 'next/head';
import Image from 'next/image';

export default function EventDetails() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Conference Title',
          text: 'Join us at this amazing conference!',
          url: window.location.href,
        })
        .catch((err) => console.error('Error sharing:', err));
    } else {
      alert('Your browser does not support the Web Share API.');
    }
  };

  return (
    <>
      <Head>
        <title>Conference Title</title>
        <meta name="description" content="Join us at this amazing conference!" />
      </Head>
      <div className="container mx-auto p-4">
        <Image
          src="./banner.jpg"
          alt="Event Banner"
          className="w-full h-64 object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-4">Conference Title</h1>
        <p className="text-lg mt-2">
          Join us for an amazing conference where we discuss various insightful topics.
        </p>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleShare}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Share Event
          </button>
          <a
            href="/register"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  );
}
