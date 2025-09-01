export const adminDashboardData = [
    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard/admin",
        icon: "fa-solid fa-tachometer-alt",
    },
    {
        id: 2,
        title: "Manage Users",
        path: "/dashboard/manage-users",
        icon: "fa-solid fa-users-cog", 
    },
];

export const MerchantDashboardData = [
    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard/merchant",
        icon: "fa-solid fa-chart-line",
    },
    {
        id: 2,
        title: "Approve Purchases",
        path: "/approve-purchases",
        icon: "fa-solid fa-check-circle",
    },
    {
        id: 3,
        title: "Lookup Customer",
        path: "/lookup-customer",
        icon: "fa-solid fa-search", 
    },
    {
        id: 4,
        title: "Set Contribution",
        path: "/set-contribution",
        icon: "fa-solid fa-sliders-h", 
    },
    {
        id: 5,
        title: "Notifications",
        path: "/notifications",
        icon: "fa-solid fa-bell",
    },
];

export const MemberDashboardData = [
    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard/member",
        icon: "fa-solid fa-home", 
    },
    {
        id: 2,
        title: "Points Summary",
        path: "/points-summary",
        icon: "fa-solid fa-star", 
    },
];

export const getRoleWiseMenu = (role) => {
    if (role === 'Admin') return adminDashboardData;
    if (role === 'Merchant') return MerchantDashboardData;
    if (role === 'Member') return MemberDashboardData;
    
};
