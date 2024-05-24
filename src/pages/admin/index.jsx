import React from 'react'
import "./style.scss"
import AdminSideBar from '../../components/adminSidebar'
import AdminList from '../../components/adminList'
import { useSelector } from 'react-redux'
import AdminAdd from '../../components/adminAdd'
import AdminAds from '../../components/adminAds'
function AdminPage() {
    const adminCategory = useSelector(state => state.interface.adminCategory)
    return (
        <div className='AdminPage'>
            <AdminSideBar />
            {

                adminCategory == 'add' ? <AdminAdd />
                    : adminCategory == 'hero' ? <AdminAds type={adminCategory} />
                        : adminCategory == 'offer' ? <AdminAds type={adminCategory} /> :
                            <AdminList type={adminCategory} />
            }
        </div>
    )
}

export default AdminPage