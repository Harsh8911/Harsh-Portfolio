import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const CertificateViewer = ({ certificateUrl, certificateTitle, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (certificateUrl) {
      // Convert Google Drive view link to direct image link
      const fileId = certificateUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        setImageUrl(`https://drive.google.com/uc?export=view&id=${fileId}`);
      } else {
        setImageUrl(certificateUrl);
      }

      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [certificateUrl]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${certificateTitle || 'certificate'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!certificateUrl) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white font-playfair">
            {certificateTitle || 'Certificate'}
          </h2>
          <div className="flex items-center gap-2">
            {!isLoading && (
              <>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm"
                >
                  <Download size={16} />
                  Download
                </button>
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm"
                >
                  <ExternalLink size={16} />
                  Original
                </a>
              </>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-80px)]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-6">
              {/* Running Man Animation */}
              <div className="relative w-80 h-20 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                {/* Track */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"></div>
                
                {/* Progress Fill */}
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
                
                {/* Running Man */}
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out"
                  style={{ left: `${Math.min(progress, 95)}%` }}
                >
                  <div className="relative">
                    {/* Man figure */}
                    <div className="w-8 h-8 text-white animate-bounce">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        {/* Head */}
                        <circle cx="12" cy="6" r="2"/>
                        {/* Body */}
                        <path d="M12 8v6"/>
                        {/* Arms */}
                        <path d="M9 11l3-1 3 1" className="animate-pulse"/>
                        {/* Legs */}
                        <path d="M10 14l2-1 2 1v4l-2-1-2 1z" className="animate-pulse"/>
                        {/* Running effect */}
                        <path d="M8 16l2-1M16 16l-2-1" className="animate-ping"/>
                      </svg>
                    </div>
                    
                    {/* Speed lines */}
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-0.5 bg-white/60 animate-pulse"></div>
                        <div className="w-1 h-0.5 bg-white/40 animate-pulse delay-100"></div>
                        <div className="w-1 h-0.5 bg-white/20 animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Finish Line */}
                <div className="absolute right-2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-red-500 to-yellow-400 animate-pulse"></div>
              </div>

              {/* Loading Text */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-playfair">
                  Loading Certificate...
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {progress < 30 ? 'Preparing document...' : 
                   progress < 60 ? 'Fetching certificate...' : 
                   progress < 90 ? 'Almost there...' : 'Ready!'}
                </p>
                <div className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.round(progress)}%
                </div>
              </div>

              {/* Corporate elements */}
              <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="text-xs font-medium">PROFESSIONAL CERTIFICATE</div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Success Animation */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium animate-bounce">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Certificate Loaded Successfully!
                </div>
              </div>

              {/* Certificate Image */}
              <div className="relative group">
                <img
                  src={imageUrl}
                  alt={certificateTitle}
                  className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </div>

              {/* Certificate Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Harsh Gawali</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Verified Certificate</p>
                    <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      Authenticated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
