import React, { useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { FaLock, FaArrowLeft, FaUserShield } from 'react-icons/fa';

interface AdminLoginProps {
    onLoginSuccess: () => void;
    onBack: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onBack }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Static Credential Check
        if (username === 'Harsh' && password === 'Admin899') {
            try {
                // Attempt to authenticate anonymously to satisfy Firestore Security Rules (request.auth != null)
                await signInAnonymously(auth);
                onLoginSuccess();
            } catch (err: any) {
                console.warn("Firebase Auth Warning:", err.code, err.message);
                
                // Known errors that imply Auth isn't enabled but credentials are correct
                if (err.code === 'auth/configuration-not-found' || 
                    err.code === 'auth/operation-not-allowed' || 
                    err.code === 'auth/admin-restricted-operation') {
                    
                    // Allow entry based on static credentials, but warn about DB permissions
                    console.log("Proceeding with static authorization fallback.");
                    onLoginSuccess();
                } else {
                    // Genuine connection errors
                    setError("Network or Auth Error: " + err.message);
                    setLoading(false);
                }
            }
        } else {
            // Artificial delay to prevent brute-force guessing
            setTimeout(() => {
                setError("Invalid credentials. Access Denied.");
                setLoading(false);
            }, 500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4 font-sans">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[50px] rounded-full pointer-events-none" />

                <button 
                    onClick={onBack} 
                    className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 text-sm transition-colors relative z-10"
                >
                    <FaArrowLeft /> Back
                </button>
                
                <div className="flex flex-col items-center mb-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-2xl shadow-lg shadow-red-500/20 flex items-center justify-center text-3xl mb-4 transform rotate-3">
                        <FaUserShield />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Admin Portal</h2>
                    <p className="text-gray-400 text-sm">Harsh Gawali Portfolio</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5 relative z-10">
                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-200 rounded-xl text-xs font-medium text-center animate-pulse">
                            {error}
                        </div>
                    )}
                    
                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Username</label>
                        <input 
                            type="text" 
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm placeholder-gray-600"
                            placeholder="Enter username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    
                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm placeholder-gray-600"
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/20 transform active:scale-[0.98] mt-2"
                    >
                        {loading ? 'Verifying...' : 'Unlock Dashboard'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;