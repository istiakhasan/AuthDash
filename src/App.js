import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import ProtectedRoute from './privateroute/PrivateRoute';
import MemberDashboard from './modules/members/MemberDashboard';
import MerchantDashboard from './modules/Merchant/MerchantDashboard';
import AdminDashboard from './modules/admin/AdminDashboard';
import MainLayout from './common/MainLayout';
import ManageUsers from './modules/admin/ManageUsers';
import ApprovePurchase from './modules/Merchant/Approve-purchase';
import LookupCustomer from './modules/Merchant/LookupCustomer';
import Notifications from './modules/Merchant/Notification';
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import SetContributionRate from './modules/Merchant/SetContributionRate';
import PointsSummary from './modules/members/PointsSummary';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Routes */}
        <Route path="/login/admin" element={<Login initialUserType="Admin" />} />
        <Route path="/login/merchant" element={<Login initialUserType="Merchant" />} />
        <Route path="/login/member" element={<Login initialUserType="Member" />} />
        
        {/* Protected Dashboard Routes */}
        <Route 
          path="/dashboard/admin" 
          element={
            <ProtectedRoute requiredRole="Admin">
              <MainLayout>
              <AdminDashboard />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/manage-users" 
          element={
            <ProtectedRoute requiredRole="Admin">
              <MainLayout>
              <ManageUsers />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        {/* Merchent  */}
        <Route 
          path="/dashboard/merchant" 
          element={
            <ProtectedRoute requiredRole="Merchant">
              <MainLayout>
              <MerchantDashboard />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/approve-purchases" 
          element={
            <ProtectedRoute requiredRole="Merchant">
              <MainLayout>
              <ApprovePurchase />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lookup-customer" 
          element={
            <ProtectedRoute requiredRole="Merchant">
              <MainLayout>
              <LookupCustomer />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/set-contribution" 
          element={
            <ProtectedRoute requiredRole="Merchant">
              <MainLayout>
              <SetContributionRate />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/notifications" 
          element={
            <ProtectedRoute requiredRole="Merchant">
              <MainLayout>
              <Notifications />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/member" 
          element={
            <ProtectedRoute requiredRole="Member">
              <MainLayout>

              <MemberDashboard />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/points-summary" 
          element={
            <ProtectedRoute requiredRole="Member">
              <MainLayout>
              <PointsSummary />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        
        {/* Default redirect to admin login */}
        <Route path="/" element={<Login initialUserType="Admin" />} />
      </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;