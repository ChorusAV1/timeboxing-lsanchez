import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Scheduler from "./pages/Scheduler"

function App()
{
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>}/>
					<Route path="/dashboard" element={<Dashboard/>}/>
					<Route path="/scheduler" element={<Scheduler/>}/>
					<Route path="*" element={<Navigate to="/"/>}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
