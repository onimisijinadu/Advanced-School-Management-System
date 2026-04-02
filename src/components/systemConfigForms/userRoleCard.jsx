import { useState } from 'react';

import {
  Settings,
  Shield,
  XIcon,
} from 'lucide-react';

import { useToast } from '../../context/useContext';
import {
  ALL_PERMISSIONS,
  Permissions as initialData,
} from '../../data/permission';
import { Buttons } from '../Button';
import {
  Card,
  CardContent,
} from '../cards';
import {
  FormHeader,
  Modal,
  ModalForm,
} from '../modal';
import { Overly } from '../overly';

export const UserRole = () => {
  const { showToast } = useToast();
  const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Track the active role being edited
  const [selectedRole, setSelectedRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [permissionsData, setPermissionsData] = useState(initialData);

  const handleOverly = () => {
    setIsOverlayOpen(false);
    setIsPermissionsModalOpen(false);
    setSelectedRole(null);
  };

  // Pass the specific role data into the click handler
  const handleEditClick = (roleData) => {
    setSelectedRole(roleData);
    setIsPermissionsModalOpen(true);
    setIsOverlayOpen(true);
  };

  // 3. ADD THIS: Toggle permissions based on the LABEL
  const handlePermissionToggle = (label) => {
    setSelectedRole((prev) => {
      const existing = prev.permissions.some((p) => p.id === label.id);

      return {
        ...prev,
        permissions: existing
          ? prev.permissions.filter((p) => p.id !== label.id) // Remove if already there
          : [...prev.permissions, label], // Add if missing
      };
    });
  };

  const handleSavePermissions = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Here you would normally update your main 'Permissions' array state
      // setPermissionsData((prevRole) => {
      //   prevRole.map((item) =>
      //     item.role === selectedRole.role
      //       ? {
      //           ...item,
      //           permissions: [selectedRole.permissions],
      //         }
      //       : item,
      //   );
      // });

      console.log("Updated Role:", selectedRole);
      showToast(
        "Permissions Updated Successfully",
        <Settings className="w-5 h-5 text-white" />,
      );
      handleOverly();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-3 p-5 bg-cardBackground border-bordercolor rounded-lg my-4">
      <div className="flex gap-2 items-center my-3">
        <Shield className="text-blue-600 w-7 h-7" />
        <p className="text-textColor3 font-semibold text-sm sm:text-lg">
          User Roles & Permissions
        </p>
      </div>

      {permissionsData.map((data) => (
        <Card key={data.role}>
          <CardContent className="flex flex-col gap-2 whitespace-nowrap">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <article>
                <p className="text-textColor3 font-semibold text-sm sm:text-lg">
                  {data.role}
                </p>
                <p className="text-textColor2 text-xs sm:text-sm">
                  {data.users} {data.users > 1 ? "users" : "user"}
                </p>
              </article>
              <Buttons
                text={`Edit Permissions`}
                // PASS THE DATA HERE
                action={() => handleEditClick(data)}
                icon={<Settings className="w-4 h-4" />}
                optionalClassName="flex flex-row-reverse gap-1.5 items-center text-sm bg-white hover:bg-black/10 border border-black/10 rounded-lg text-black/90 font-medium py-1.5 px-1"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {data.permissions.map((permission) => (
                <article
                  key={permission.id}
                  className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl"
                >
                  {permission.label}
                </article>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {isPermissionsModalOpen && selectedRole && (
        <Modal
          className="w-full max-w-2xl rounded-xl overflow-y-auto h-screen"
          overly={<Overly isOpen={isOverlayOpen} close={handleOverly} />}
        >
          <ModalForm
            action={handleSavePermissions}
            text={isLoading ? "Saving..." : "Save Changes"}
          >
            <FormHeader
              title={`Edit Permissions: ${selectedRole.role}`}
              subtitle={`Configure access for the ${selectedRole.role} role.`}
              icon={<XIcon className="cursor-pointer" onClick={handleOverly} />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 overflow-y-auto max-h-[400px]">
              {ALL_PERMISSIONS.map((perm) => (
                <div
                  key={perm.id}
                  className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handlePermissionToggle(perm)}
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-primaryBlue cursor-pointer"
                    // CHECK AGAINST THE LABEL
                    checked={selectedRole.permissions.some(
                      (p) => p.id === perm.id,
                    )}
                    readOnly
                  />
                  <div>
                    <p className="text-sm font-semibold text-textColor3">
                      {perm.label}
                    </p>
                    <p className="text-xs text-textColor">{perm.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </ModalForm>
        </Modal>
      )}
    </div>
  );
};

// export const UserRole = () => {
//   const { showToast } = useToast();
//   const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);
//   const [isOverlayOpen, setIsOverlayOpen] = useState(false);
//   // const [selectedRole, setSelectedRole] = useState(null);

//   const [isLoading, setIsLoading] = useState(false);

//   const handleOverly = () => {
//     setIsOverlayOpen((prev) => !prev);
//     setIsPermissionsModalOpen((prev) => !prev);
//   };
//   // Function to open modal with existing permissions
//   const handleEditClick = () => {
//     // setSelectedRole(); // role object should have: { name: 'Teacher', permissions: ['grade_entry', ...] }
//     setIsPermissionsModalOpen((prev) => !prev);
//     setIsOverlayOpen((prev) => !prev);
//   };

//   // Function to toggle a permission ID in the list
//   // const handlePermissionToggle = (permId) => {
//   //   setSelectedRole((prev) => ({
//   //     ...prev,
//   //     permissions: prev.permissions.includes(permId)
//   //       ? prev.permissions.filter((id) => id !== permId)
//   //       : [...prev.permissions, permId],
//   //   }));
//   // };

//   const handleSavePermissions = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate API Call
//     setTimeout(() => {
//       console.log("Updated Role:", selectedRole);
//       showToast(
//         "Permissions Updated Successfully",
//         <CheckCircle2 className="w-5 h-5 text-white" />,
//       );
//       setIsPermissionsModalOpen(false);
//       setIsLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="flex flex-col gap-3 p-5 bg-cardBackground border-bordercolor rounded-lg my-4">
//       <div className="flex gap-2 items-center my-3">
//         <Shield className="text-blue-600 w-7 h-7" />
//         <p className="text-textColor3 font-semibold text-sm sm:text-lg">
//           User Roles & Permissions
//         </p>
//       </div>
//       {Permissions.map((data) => (
//         <Card>
//           <CardContent className={`flex flex-col gap-2 whitespace-nowrap`}>
//             <div className="flex flex-wrap gap-3 items-center justify-between">
//               <article>
//                 <p className=" text-textColor3 font-semibold text-sm sm:text-lg">
//                   {data.role}
//                 </p>
//                 <p className="text-textColor2 text-xs sm:text-sm">
//                   {data.users} {data.users > 1 ? "users" : "user"}
//                 </p>
//               </article>
//               <Buttons
//                 text={`Edit Permissions`}
//                 action={handleEditClick}
//                 icon={<Settings className="w-4 h-4" />}
//                 optionalClassName={`flex flex-row-reverse gap-1.5 items-center text-sm bg-white hover:bg-black/10 border border-black/10 rounded-lg text-black/90 font-medium py-1.5 px-1`}
//               />
//             </div>
//             <div className="flex flex-wrap items-center  gap-3">
//               {data.permissions.map((permission) => (
//                 <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//                   {permission}
//                 </article>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       ))}

//       {isPermissionsModalOpen && (
//         <Modal
//           className="w-full max-w-2xl rounded-xl"
//           overly={<Overly isOpen={isOverlayOpen} close={handleOverly} />}
//         >
//           <ModalForm
//             action={handleSavePermissions}
//             text={isLoading ? "Saving..." : "Save Changes"}
//           >
//             <FormHeader
//               title={`Edit Permissions: ${selectedRole.name}`}
//               subtitle={`Configure what ${selectedRole.name}s can access in the system.`}
//               icon={
//                 <XIcon
//                   className="cursor-pointer"
//                   onClick={() => setIsPermissionsModalOpen(false)}
//                 />
//               }
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
//               {ALL_PERMISSIONS.map((perm) => (
//                 <div
//                   key={perm.id}
//                   className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
//                   onClick={() => handlePermissionToggle(perm.id)}
//                 >
//                   <input
//                     type="checkbox"
//                     className="w-5 h-5 accent-primaryBlue cursor-pointer"
//                     // checked={}
//                     onChange={() => {}} // Handled by div onClick for better UX
//                   />
//                   <div>
//                     <p className="text-sm font-semibold text-textColor3">
//                       {perm.label}
//                     </p>
//                     <p className="text-xs text-textColor">{perm.category}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </ModalForm>
//         </Modal>
//       )}
//       {/* <Card>
//         <CardContent className={`flex flex-col gap-2 whitespace-nowrap`}>
//           <div className="flex items-center justify-between">
//             <article>
//               <p className=" text-textColor3 font-semibold text-sm sm:text-lg">
//                 Principal
//               </p>
//               <p className="text-textColor2 text-xs sm:text-sm">1 user</p>
//             </article>
//             <Buttons
//               text={`Edit Permissions`}
//               icon={<Settings className="w-5 h-5" />}
//               optionalClassName={`flex flex-row-reverse gap-3 items-center text-sm bg-white hover:bg-black/10 border border-black/10 rounded-lg text-black/90 font-medium py-1.5 px-2`}
//             />
//           </div>
//           <div className="flex items-center  gap-3">
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               Academic Oversight
//             </article>
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               Report Access
//             </article>
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               Staff Management
//             </article>
//           </div>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardContent className={`flex flex-col gap-2 whitespace-nowrap`}>
//           <div className="flex items-center justify-between">
//             <article>
//               <p className=" text-textColor3 font-semibold text-sm sm:text-lg">
//                 Teacher
//               </p>
//               <p className="text-textColor2 text-xs sm:text-sm">10 users</p>
//             </article>
//             <Buttons
//               text={`Edit Permissions`}
//               icon={<Settings className="w-5 h-5" />}
//               optionalClassName={`flex flex-row-reverse gap-3 items-center text-sm bg-white hover:bg-black/10 border border-black/10 rounded-lg text-black/90 font-medium py-1.5 px-2`}
//             />
//           </div>
//           <div className="flex items-center  gap-3">
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               Class Management
//             </article>
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               Grade Entry
//             </article>
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               Attendance Marking
//             </article>
//           </div>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardContent className={`flex flex-col gap-2 whitespace-nowrap`}>
//           <div className="flex items-center justify-between">
//             <article>
//               <p className=" text-textColor3 font-semibold text-sm sm:text-lg">
//                 Students
//               </p>
//               <p className="text-textColor2 text-xs sm:text-sm">247 users</p>
//             </article>
//             <Buttons
//               text={`Edit Permissions`}
//               icon={<Settings className="w-5 h-5" />}
//               optionalClassName={`flex flex-row-reverse gap-3 items-center text-sm bg-white hover:bg-black/10 border border-black/10 rounded-lg text-black/90 font-medium py-1.5 px-2`}
//             />
//           </div>
//           <div className="flex items-center  gap-3">
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               View Grades
//             </article>
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               View Attendance
//             </article>
//             <article className="bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-xl">
//               Access Materials
//             </article>
//           </div>
//         </CardContent>
//       </Card> */}
//     </div>
//   );
// };
