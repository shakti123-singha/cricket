import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:underline">About Us</a></li>
            <li><a href="/home" className="hover:underline">Team</a></li>
            <li><a href="/home" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:underline">FAQ</a></li>
            <li><a href="/home" className="hover:underline">Contact Us</a></li>
            <li><a href="/home" className="hover:underline">Help Center</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.941 1.794-4.549 4.415-4.549 1.254 0 2.33.093 2.646.134v3.066l-1.816.001c-1.423 0-1.698.677-1.698 1.67v2.187h3.396l-.443 3.622h-2.953V24h5.788c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557a9.834 9.834 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.946 13.946 0 011.671 3.149a4.916 4.916 0 001.523 6.573A4.9 4.9 0 01.96 9.086v.062a4.917 4.917 0 003.946 4.827 4.897 4.897 0 01-2.212.084 4.919 4.919 0 004.6 3.417A9.867 9.867 0 010 21.54a13.947 13.947 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.344.015 7.053.072 5.72.129 4.387.355 3.25 1.492 2.113 2.63 1.887 3.963 1.83 5.296.972 6.656.956 7.044.956 12c0 4.956.016 5.344.073 6.704.057 1.333.283 2.666 1.42 3.803 1.137 1.137 2.47 1.363 3.803 1.42C8.344 23.985 8.756 24 12 24s3.656-.015 4.947-.072c1.333-.057 2.666-.283 3.803-1.42 1.137-1.137 1.363-2.47 1.42-3.803.057-1.36.073-1.748.073-6.704 0-4.956-.016-5.344-.073-6.704-.057-1.333-.283-2.666-1.42-3.803C19.613.355 18.28.129 16.947.072 15.656.015 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100-2.882 1.44 1.44 0 000 2.882z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
