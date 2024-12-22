export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-400 py-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 FlowTracker. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="/privacy"
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }