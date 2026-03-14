import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Trash2, CheckCircle, Clock, LogOut, Download } from 'lucide-react';

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      fetchInquiries();
    }
  }, [token]);

  const fetchInquiries = async () => {
  try {
    const res = await axios.get('/api/admin/inquiries', {
      headers: { Authorization: `Bearer ${token}` }
    });
    // API returns { data: [...], pagination: {...} }
    setInquiries(res.data.data || res.data); // Handle both structures
  } catch (err) {
    console.error('Fetch error:', err);
    handleLogout();
  }
};

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/admin/login', credentials);
      localStorage.setItem('adminToken', res.data.token);
      setToken(res.data.token);
    } catch (err) {
      alert('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
  };

  const deleteInquiry = async (id: number) => {
    if (!confirm('Are you sure?')) return;
    await axios.delete(`/api/admin/inquiries/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchInquiries();
  };

  const updateStatus = async (id: number, status: string) => {
    await axios.patch(`/api/admin/inquiries/${id}/status`, { status }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchInquiries();
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Arrival', 'Departure', 'Guests', 'Room', 'Status', 'Date'];
    const rows = inquiries.map(i => [
      i.id, i.fullName, i.email, i.phone, i.arrivalDate, i.departureDate, i.guests, i.roomType, i.status, i.createdAt
    ]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inquiries.csv");
    document.body.appendChild(link);
    link.click();
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-md"
        >
          <h1 className="text-3xl font-serif text-navy mb-8 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-navy/60 font-bold">Username</label>
              <input 
                type="text" 
                className="w-full border-b border-navy/20 py-2 focus:outline-none focus:border-gold"
                value={credentials.username}
                onChange={e => setCredentials({...credentials, username: e.target.value})}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-navy/60 font-bold">Password</label>
              <input 
                type="password" 
                className="w-full border-b border-navy/20 py-2 focus:outline-none focus:border-gold"
                value={credentials.password}
                onChange={e => setCredentials({...credentials, password: e.target.value})}
              />
            </div>
            <button 
              disabled={loading}
              className="w-full bg-navy text-white py-4 font-bold uppercase tracking-widest hover:bg-gold transition-colors"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-champagne pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif text-navy">Inquiry Dashboard</h1>
          <div className="flex space-x-4">
            <button 
              onClick={exportToCSV}
              className="flex items-center space-x-2 bg-white text-navy px-4 py-2 rounded-sm border border-navy/10 hover:bg-navy hover:text-white transition-all"
            >
              <Download size={18} />
              <span className="text-xs uppercase font-bold tracking-widest">Export CSV</span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-navy text-white px-4 py-2 rounded-sm hover:bg-gold transition-all"
            >
              <LogOut size={18} />
              <span className="text-xs uppercase font-bold tracking-widest">Logout</span>
            </button>
          </div>
        </div>

        <div className="bg-white shadow-xl overflow-hidden rounded-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-navy text-white text-xs uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Guest</th>
                  <th className="px-6 py-4">Stay Details</th>
                  <th className="px-6 py-4">Room</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5">
                {inquiries.map(inquiry => (
                  <tr key={inquiry.id} className="hover:bg-navy/5 transition-colors">
                    <td className="px-6 py-6">
                      <div className="font-bold text-navy">{inquiry.fullName}</div>
                      <div className="text-xs text-navy/60">{inquiry.email}</div>
                      <div className="text-xs text-navy/60">{inquiry.phone}</div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-sm text-navy">{inquiry.arrivalDate} → {inquiry.departureDate}</div>
                      <div className="text-xs text-navy/60">{inquiry.guests} Guests</div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="text-xs font-bold uppercase text-gold">{inquiry.roomType}</span>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${
                        inquiry.status === 'contacted' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => updateStatus(inquiry.id, inquiry.status === 'contacted' ? 'pending' : 'contacted')}
                          className="text-navy/40 hover:text-emerald-600 transition-colors"
                          title="Mark as contacted"
                        >
                          <CheckCircle size={20} />
                        </button>
                        <button 
                          onClick={() => deleteInquiry(inquiry.id)}
                          className="text-navy/40 hover:text-rose-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
