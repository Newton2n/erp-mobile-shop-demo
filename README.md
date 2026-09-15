# Mobile Repair Shop ERP

A frontend prototype for a mobile phone repair shop ERP system.

The project is designed as an internal business management system for a single repair shop. It provides a central interface for managing customers, devices, repair jobs, inventory, invoices, payments, warranties, and day-to-day repair operations.

This repository currently focuses on the **frontend and UI/UX prototype**. Backend APIs, database integration, authentication, and other production functionality will be added as the project develops.

## Features

The current prototype includes the UI foundation for an internal repair-shop ERP, including:

* Authentication / login screen
* ERP dashboard
* Customer management
* Device and repair management
* Repair workflow
* Inventory management
* Supplier and purchasing screens
* Invoice and payment screens
* Warranty management
* Reports
* User and role management
* Shop settings

The screens are built around a consistent ERP layout with reusable components and realistic business data.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide Icons

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/erp-mobile-shop-demo.git
```

Navigate to the project:

```bash
cd erp-mobile-shop-demo
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

The project uses the Next.js App Router.

```text
app/
├── login/
├── dashboard/
├── customers/
├── devices/
├── repairs/
├── inventory/
├── suppliers/
├── invoices/
├── warranty/
├── reports/
├── users/
└── settings/

components/
├── ui/
├── dashboard/
├── customers/
├── repairs/
├── inventory/
└── shared/

lib/
├── utils.ts
└── ...
```

The exact structure may change as the application is developed further.

## ERP Workflow

The planned workflow is centered around the actual repair process:

```text
Customer
   ↓
Device Intake
   ↓
Repair Ticket
   ↓
Diagnosis
   ↓
Estimate
   ↓
Customer Approval
   ↓
Technician Assignment
   ↓
Parts / Inventory
   ↓
Repair
   ↓
Quality Check
   ↓
Invoice & Payment
   ↓
Device Handover
   ↓
Warranty
```

The goal is to keep the complete repair history connected to the customer and device.

## Planned Backend

The frontend is being designed with a future backend integration in mind.

The planned backend stack is:

* Node.js
* Express
* TypeScript
* PostgreSQL
* Prisma
* Redis

The backend will provide APIs for:

* Authentication
* Users and roles
* Customers
* Devices
* Repair tickets
* Technicians
* Inventory
* Suppliers
* Purchase orders
* Invoices
* Payments
* Warranty
* Reports
* Audit logs

## Authentication and Roles

The completed system will support role-based access for internal staff.

Planned roles include:

* Owner / Manager
* Admin
* Receptionist
* Technician
* Inventory Staff

Each role will have access only to the areas required for their responsibilities.

## Development Status

This project is currently in the **frontend prototype / UI development stage**.

### Completed / In Progress

* ERP layout
* Navigation
* Dashboard UI
* Core business screens
* Reusable UI components
* Responsive layouts
* Mock data
* Repair workflow UI

### Planned

* Express backend
* PostgreSQL database
* Prisma schema
* Authentication
* RBAC
* REST APIs
* Real inventory transactions
* Invoice and payment processing
* Warranty workflow
* Reports
* Audit logging
* Automated testing
* Production deployment

## Design Approach

The interface is designed for daily use by repair-shop staff rather than as a customer-facing application.

The main priorities are:

* Fast access to repair information
* Clear repair status
* Easy customer lookup
* Device and IMEI tracking
* Inventory visibility
* Simple invoice management
* Role-based access
* Consistent and reusable UI

## Demo

A deployed version of the current frontend prototype is available here:

https://erp-mobile-shop-demo.vercel.app/

The demo is a UI prototype and does not represent the final backend-enabled system.

## Future Development

The project will gradually move from a frontend prototype into a complete full-stack ERP.

The planned development order is:

1. Finalize UI and workflows
2. Design PostgreSQL database
3. Build Express API
4. Implement authentication and RBAC
5. Connect customer and device management
6. Implement repair workflow
7. Implement inventory and purchasing
8. Implement invoices and payments
9. Add warranty and reporting
10. Add testing and audit logging
11. Deploy the complete system

## License

This project is currently for development and assessment purposes.
