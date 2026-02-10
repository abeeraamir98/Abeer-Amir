# Abeer Amir - Premium Apparel E-Commerce Platform

A modern, professional e-commerce website for Abeer Amir premium apparel brand, built with React, TypeScript, Vite, and Supabase.

## Features

- **Product Catalog**: Browse premium apparel with category filtering
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Secure sign up and login system
- **Checkout System**: Streamlined order placement with shipping information
- **Admin Dashboard**: Product management (create, update, delete)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Database**: Supabase integration for secure data management

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via CDN)
- **State Management**: Zustand
- **Backend**: Supabase
  - PostgreSQL Database
  - Row Level Security (RLS)
  - Authentication
- **UI Components**: Lucide React Icons

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── Home.tsx     # Product listing
│   ├── Auth.tsx     # Login/signup
│   ├── Cart.tsx     # Shopping cart
│   ├── Checkout.tsx # Order checkout
│   └── Admin.tsx    # Admin dashboard
├── store/          # Zustand stores
│   ├── authStore.ts
│   └── cartStore.ts
├── lib/            # Utilities
│   └── supabase.ts  # Supabase client
├── App.tsx         # Main app component
├── main.tsx        # React entry point
└── index.css       # Global styles
```

## Database Schema

### Tables
- **products**: Product catalog with name, description, price, image URL, category, and stock
- **cart_items**: Shopping cart items linked to users
- **orders**: Customer orders
- **order_items**: Individual items in each order

### Security
All tables have Row Level Security (RLS) enabled with policies that restrict data access to authenticated users and their own data.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_SUPABASE_ANON_KEY=your_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Key Features

### Product Management
- Admin users can add, update, and delete products
- Products have categories, prices, stock levels, and images
- Real-time stock management

### Shopping Experience
- Browse products with category filtering
- Add items to cart with quantity management
- Secure checkout with order tracking
- Customer information collection

### Authentication
- Email/password registration and login
- Secure session management with Supabase Auth
- Role-based access control for admin features

### Admin Features
- Complete product catalog management
- Stock inventory control
- Order monitoring capabilities

## Environment Variables

```env
VITE_SUPABASE_URL=https://[project-id].supabase.co
VITE_SUPABASE_SUPABASE_ANON_KEY=eyJ...
```

## Security

- Sensitive operations use Row Level Security (RLS)
- Authentication managed by Supabase Auth
- No secrets exposed in client-side code
- All user data is encrypted and secure

## Performance

- Optimized with Vite for fast builds
- Lazy loading of components
- Efficient database queries
- Responsive and accessible design

## Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- Email notifications
- Order tracking system
- Customer reviews and ratings
- Wishlist functionality
- Advanced search and filters
- Analytics dashboard

## License

ISC

## Contact

- Phone: +92 300 6190087
- Email: abeeramirenterprises@gmail.com

---

Built with for Abeer Amir Premium Apparel
