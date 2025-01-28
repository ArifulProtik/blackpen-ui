import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className="w-full rounded-b border-[1px]">
      {/* Cover Image */}
      <div className="relative h-32 overflow-hidden rounded-b bg-gray-200 sm:h-48">
        <Image
          src="https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg"
          alt="Cover"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Content */}
      <div className="relative rounded-b-lg bg-white px-4 pb-6 sm:px-6">
        {/* Profile Picture */}
        <div className="absolute -top-12 left-4 sm:-top-16 sm:left-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-gray-200 sm:h-32 sm:w-32">
            <Image
              src="https://i.pravatar.cc/150?u=jsdfghdfh"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-16 sm:pt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-0">
            <div>
              <h1 className="text-xl font-bold sm:text-2xl">John Doe</h1>
              <p className="text-sm text-gray-600 sm:text-base">
                Software Engineer
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Tokyo, Japan
              </p>
              {/* Moved social links here */}
              <div className="mt-3 flex gap-2">
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button className="rounded-full bg-primary px-3 py-1.5 text-sm text-white hover:bg-primary/85 sm:px-4 sm:py-2 sm:text-base">
                Follow
              </button>
              <button className="rounded-full border border-primary px-3 py-1.5 text-sm text-primary hover:bg-primary hover:text-white sm:px-4 sm:py-2 sm:text-base">
                Message
              </button>
              <button className="rounded-full bg-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-300 sm:px-4 sm:py-2 sm:text-base">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-4 text-justify text-sm text-gray-700 sm:text-base md:text-left">
            Passionate about building great software and solving complex
            problems. Experienced in full-stack development and agile
            methodologies. Looking to join a dynamic team that shares a
            commitment to excellence. Let&apos;s connect and make something
            great together! 👨‍💻🚀
          </p>
          {/* Stats */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm sm:mt-6 sm:gap-6 sm:text-base">
            <div>
              <span className="font-semibold">2.5K</span>{' '}
              <span className="text-gray-600">Followers</span>
            </div>
            <div>
              <span className="font-semibold">1.2K</span>{' '}
              <span className="text-gray-600">Following</span>
            </div>
            <div>
              <span className="font-semibold">156</span>{' '}
              <span className="text-gray-600">Articles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
