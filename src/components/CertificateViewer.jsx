import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const CertificateViewer = ({ certificateUrl, certificateTitle, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [embedUrl, setEmbedUrl] = useState('');

  useEffect(() => {
    if (certificateUrl) {
      setIsLoading(true);
      setProgress(0);
      
      // Convert Google Drive view link to embed link
      const fileId = certificateUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        setEmbedUrl(`https://drive.google.com/file/d/${fileId}/preview`);
      } else {
        setEmbedUrl(certificateUrl);
      }

      // Simulate loading progress with running man animation
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            // Add a small delay before showing the certificate
            setTimeout(() => setIsLoading(false), 500);
            return 100;
          }
          return prev + Math.random() * 12 + 3;
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [certificateUrl]);

  const handleDownload = () => {
    // Open the original Google Drive link for download
    window.open(certificateUrl, '_blank');
  };

  if (!certificateUrl) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full max-h-[95vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
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
                  Open in Drive
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

        {/* Content - Added scroll bar with overflow-y-auto */}
        <div className="overflow-y-auto" style={{ height: 'calc(95vh - 80px)' }}>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
              {/* Running Man Animation */}
              <div className="relative w-96 h-24 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full overflow-hidden border-2 border-blue-200 dark:border-blue-800">
                {/* Track with finish line */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-purple-900/20"></div>
                
                {/* Progress Fill */}
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 transition-all duration-300 ease-out rounded-full opacity-30"
                  style={{ width: `${progress}%` }}
                ></div>
                
                {/* Running Man */}
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out z-10"
                  style={{ left: `${Math.min(progress * 0.85, 85)}%` }}
                >
                  <div className="relative">
                    {/* Running Man SVG */}
                    <div className="w-12 h-12 text-blue-600 dark:text-blue-400">
                      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full animate-bounce">
                        {/* Head */}
                        <circle cx="50" cy="20" r="8" className="animate-pulse"/>
                        
                        {/* Body */}
                        <rect x="46" y="28" width="8" height="25" rx="2" className="animate-pulse"/>
                        
                        {/* Arms - animated for running motion */}
                        <g className="animate-pulse">
                          <rect x="38" y="32" width="12" height="4" rx="2" transform="rotate(-20 44 34)"/>
                          <rect x="50" y="32" width="12" height="4" rx="2" transform="rotate(20 56 34)"/>
                        </g>
                        
                        {/* Legs - animated for running motion */}
                        <g className="animate-bounce">
                          <rect x="42" y="53" width="6" height="18" rx="3" transform="rotate(15 45 62)"/>
                          <rect x="52" y="53" width="6" height="18" rx="3" transform="rotate(-15 55 62)"/>
                        </g>
                        
                        {/* Running shoes */}
                        <ellipse cx="40" cy="75" rx="6" ry="3" className="animate-pulse"/>
                        <ellipse cx="60" cy="75" rx="6" ry="3" className="animate-pulse"/>
                      </svg>
                    </div>
                    
                    {/* Speed lines behind the runner */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-0.5 bg-blue-400/60 animate-pulse"></div>
                        <div className="w-1.5 h-0.5 bg-blue-400/40 animate-pulse delay-75"></div>
                        <div className="w-1 h-0.5 bg-blue-400/20 animate-pulse delay-150"></div>
                      </div>
                    </div>
                    
                    {/* Dust clouds */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping"></div>
                        <div className="w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping delay-100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Finish Line */}
                <div className="absolute right-4 top-0 bottom-0 w-2 bg-gradient-to-b from-red-500 via-white via-red-500 via-white to-red-500 animate-pulse border-l-2 border-r-2 border-red-600"></div>
                
                {/* Distance markers */}
                <div className="absolute bottom-1 left-1/4 text-xs text-gray-500 dark:text-gray-400">25%</div>
                <div className="absolute bottom-1 left-1/2 text-xs text-gray-500 dark:text-gray-400">50%</div>
                <div className="absolute bottom-1 left-3/4 text-xs text-gray-500 dark:text-gray-400">75%</div>
              </div>

              {/* Loading Text */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-playfair">
                  Loading Certificate...
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base mb-2">
                  {progress < 25 ? 'Starting the race...' : 
                   progress < 50 ? 'Running to fetch your certificate...' : 
                   progress < 75 ? 'Almost at the finish line...' : 
                   progress < 95 ? 'Crossing the finish line...' : 'Certificate ready!'}
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {Math.round(progress)}%
                </div>
                
                {/* Progress bar */}
                <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Certificate info */}
              <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="text-sm font-medium">LOADING CERTIFICATE FROM DRIVE</div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          ) : (
            <div className="h-full relative">
              {/* Google Drive Embedded Certificate */}
              <div className="h-full bg-gray-100 dark:bg-gray-800">
                <iframe
                  src={embedUrl}
                  className="w-full h-full border-0"
                  title={certificateTitle}
                  allow="autoplay"
                  style={{ minHeight: 'calc(100vh - 200px)' }}
                  onLoad={() => {
                    // Additional loading complete handler if needed
                  }}
                  onError={() => {
                    console.error('Failed to load certificate iframe');
                  }}
                />
              </div>

              {/* Certificate Info Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-3 border-t border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {certificateTitle} - Harsh Gawali
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <span className="text-xs">✓ Verified Certificate</span>
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