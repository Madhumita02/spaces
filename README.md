# Fanpit Spaces Prototype

Postman - https://.postman.co/workspace/My-Workspace~2afa3e38-7e6b-40c7-8281-eb53f3396162/request/39674797-e910fa90-3c44-4e5a-b403-bb786ec899b3?action=share&creator=39674797

## Routes
http://localhost:3000/signup
http://localhost:3000/login
http://localhost:3000/brand-owner
http://localhost:3000/consumer
http://localhost:3000/staff
http://localhost:3000/
http://localhost:3000/brand-owner/haha


## Setup & Approach

This project demonstrates a minimal booking platform where:  
- **Brand Owners** can register, log in, and list their spaces.  
- **Consumers** can register, log in, and browse spaces uploaded by brand owners.  

The current implementation focuses on authentication, space creation, and consumer space discovery.

### Tech Stack
- **Frontend:** Next.js 15 (TypeScript, Tailwind CSS, React-Hook-Form/Zod)  
- **Backend:** NestJS (Node 18, TypeScript) + Mongoose ODM  
- **Database:** MongoDB Atlas  
- **Payments:** Razorpay (test keys only, not fully integrated yet)  

### How to Run Locally

1. Clone the repo:  
   ```bash
   git clone <your-repo-url>
   cd fanpit-spaces

2. Install frontend & backend dependencies:

# Frontend
cd frontend
npm install
# Backend
cd ../backend
npm install

3. Setup .env files:

# Backend (backend/.env)

MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
RAZORPAY_KEY_ID=<test-key-id>
RAZORPAY_KEY_SECRET=<test-key-secret>
# Frontend (frontend/.env.local)
NEXT_PUBLIC_API_URL=http://localhost:3001



4. Start servers:

# Backend
npm run start:dev
# Frontend
npm run dev

## Architectural Decisions

- **NestJS Modular Backend:** Organized into `auth`, `users`, and `spaces` modules.  
- **JWT Authentication:** Required for protected routes (e.g., brand owners adding spaces).  
- **Frontend Routing:**  
  - `/auth` → login & signup pages  
  - `/brand-owner` → space creation and management  
  - `/consumer` → space browsing for logged-in consumers  
- **Data Fetching:** Frontend fetches space listings from backend REST API.  
- **Database Models:** Mongoose schema for `User` and `Space`.  

---

## Known Limitations

- Payments flow (Razorpay) is not fully implemented — only test keys added.  
- Backend does not yet support **update/delete** for spaces (only create).  
- Reservations and booking workflow are not implemented.  
- No availability calendar or seat selection yet.  
- No advanced pricing rules (only basic fields).  
- Error handling is minimal — edge cases (overbooking, failed requests) are not handled.  

---

## What I’d Do Next

### Payments & Reservations
- Integrate Razorpay checkout (test → live).  
- Implement reservation workflow with availability calendar, seat counts, and booking confirmation.  

### Consumer Experience
- Add filters (capacity, amenities, location).  
- Space detail page → expand a selected space with description, availability, and booking option.  
- Booking cancellation and refund logic.  

### Brand Owner Tools
- Full CRUD for spaces: add, update, delete.  
- Pricing engine: hourly/day rates, peak/off-peak pricing, promo codes.  
- Reservation analytics.  

### Staff Dashboard
- Real-time reservation list with check-in/out marking and no-show flagging.  

### Production Readiness
- Improve error handling and validations.  
- Add automated testing and CI/CD pipeline.  
- Secure APIs with stricter role-based access checks.  
