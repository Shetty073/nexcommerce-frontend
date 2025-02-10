export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6 mt-8 absolute bottom-0 w-full'>
      <div className='container mx-auto text-center'>
        <p>&copy; 2025 NexCommerce. All rights reserved.</p>
        <div className='mt-2 space-x-4'>
          <a href='#' className='hover:underline'>Privacy Policy</a>
          <a href='#' className='hover:underline'>About Us</a>
          <a href='#' className='hover:underline'>Contact</a>
        </div>
      </div>
    </footer>
  );
}
