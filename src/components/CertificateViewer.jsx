import React, { useEffect, useState } from 'react';
import { ArrowLeft, Download, ExternalLink, User } from 'lucide-react';

const CertificateViewer = () => {
  const [certificateUrl, setCertificateUrl] = useState('');
  const [certificateTitle, setCertificateTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    const title = urlParams.get('title');
    
    if (url) {
      // Convert Google Drive view link to direct image link
      const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        setCertificateUrl(`https://drive.google.com/uc?export=view&id=${fileId}`);
      } else {
        setCertificateUrl(url);
      }
    }
    
    if (title) {
      setCertificateTitle(decodeURIComponent(title));
    }
    
    setIsLoading(false);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = `${certificateTitle || 'certificate'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-500">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleGoBack}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white font-playfair">
                  {certificateTitle || 'Certificate'}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Harsh Gawali's Professional Certificate
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download size={18} />
                Download
              </button>
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={18} />
                Open Original
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Display */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Running Man Animation */}
            <div className="absolute bottom-10 left-0 w-full">
              <div className="running-man animate-run-across">
                <div className="corporate-man">
                  <div className="head bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-full mb-2 mx-auto"></div>
                  <div className="body bg-gradient-to-r from-gray-700 to-gray-900 w-6 h-12 rounded-lg mx-auto mb-1"></div>
                  <div className="legs flex gap-1 justify-center">
                    <div className="leg bg-gray-800 w-2 h-8 rounded-full animate-leg-left"></div>
                    <div className="leg bg-gray-800 w-2 h-8 rounded-full animate-leg-right"></div>
                  </div>
                  <div className="arms flex gap-4 justify-center -mt-8">
                    <div className="arm bg-gray-700 w-1 h-6 rounded-full animate-arm-left"></div>
                    <div className="arm bg-gray-700 w-1 h-6 rounded-full animate-arm-right"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-50"></div>
            <div className="absolute top-60 right-40 w-5 h-5 bg-yellow-400 rounded-full animate-pulse opacity-30"></div>
          </div>

          {/* Certificate Container */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            
            {/* Certificate Image */}
            <div className="relative p-4 lg:p-8">
              <div className="relative group">
                <img
                  src={certificateUrl}
                  alt={certificateTitle}
                  className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="px-4 lg:px-8 pb-6">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Harsh Gawali</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Certified Professional</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Verified Achievement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes run-across {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }

        @keyframes leg-left {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(20deg);
          }
        }

        @keyframes leg-right {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-20deg);
          }
        }

        @keyframes arm-left {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-15deg);
          }
        }

        @keyframes arm-right {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }

        .animate-run-across {
          animation: run-across 15s linear infinite;
        }

        .animate-leg-left {
          animation: leg-left 0.5s ease-in-out infinite;
        }

        .animate-leg-right {
          animation: leg-right 0.5s ease-in-out infinite;
        }

        .animate-arm-left {
          animation: arm-left 0.5s ease-in-out infinite;
        }

        .animate-arm-right {
          animation: arm-right 0.5s ease-in-out infinite;
        }

        .corporate-man {
          transform-origin: bottom center;
          animation: bounce 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CertificateViewer;