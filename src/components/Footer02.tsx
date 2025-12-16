'use client';

export default function Footer02() {
  return (
    <div className="bg-gray-950 text-gray-400 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © 2024 Leats. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm">We Accept:</span>
            <div className="flex items-center gap-2">
              <span className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-medium">VISA</span>
              <span className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-medium">Mastercard</span>
              <span className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-medium">UPI</span>
              <span className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-medium">COD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
