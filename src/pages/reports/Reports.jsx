import "./Reports.css";
import { DataGrid } from "@mui/x-data-grid";
import { Print } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getUsers } from "../../redux/apiCalls";
import jsPDF from 'jspdf';
import 'jspdf-autotable';


export default function Reports() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const users = useSelector((state) => state.users.allUsers);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);


  const handleGenerate = () => {
        const doc = new jsPDF();

        doc.text("Product Report", 20,8);
        // Create a table with autotable
        doc.autoTable({
            head: [
                ["ID", "Product", "Stock", "Price"]
            ],
            body: products.map(product => [product._id, product.title, product.inStock, product.price]),
        });

        doc.save('productReport.pdf');
  }


  const handleUserGenerate = () => {
    const doc = new jsPDF();
    doc.text("User Report", 20, 8);

    // Create a table with autotable
    doc.autoTable({
      head: [ 
        ["ID", "User", "Email", "IsAdmin?"]
      ],
      body: users.map(user => [user._id, user.username, user.email, user.isAdmin]),
    });

    doc.save('userReport.pdf');
  }


  const productColumn = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "title", // Changed to 'title' from 'product'
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
        field: "report",
        width: 100,
        renderHeader: () => (
             <Print className="generateReport" onClick={() => handleGenerate()}/>
        ),
    },

  ];



    // User Column
    const userColumn = [

        { field: "_id", headerName: "ID", width: 220 },
        {
          field: "username",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.img  || 'https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png'} alt="" /> {params.row.username}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 210 },
        {
          field: "isAdmin",
          headerName: "Is Admin?",
          width: 150,
        },
        {
            field: "report",
            width: 100,
            renderHeader: () => (
              <Print className="generateReport" onClick={() => handleUserGenerate()}/>
            ),
        },
        
      ];




  return (
    <div>
    <div className="productList">
    <h2>Product Report</h2>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={productColumn}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
    <div className="userList">
    <h2>User Report</h2>
    <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={userColumn}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
    </div>
  );
}
