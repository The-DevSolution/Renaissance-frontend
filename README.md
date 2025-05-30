# Renaissance Frontend - Decentralized Football Fan Experience
JOIN OUR TELEGRAM CHANNEL FOR EASY COMMUNICATION 
https://t.me/+h1HGgfpGn_5hYTVk
The frontend application for Renaissance, a revolutionary platform where football fans can immerse themselves in real-time team updates, exclusive player content, and transparent decentralized betting powered by Starknet.

## 🏗️ Architecture Overview

Renaissance is built as a **microservices architecture** with three main repositories:

- **Frontend** (This repo): Next.js 14 with TypeScript - User interface and Web3 interactions
- **Backend**: NestJS with TypeScript - API services and business logic
- **Smart Contracts**: Cairo on Starknet - Decentralized betting and content access

## 🚀 Frontend Features

### User Interface
- 📱 Responsive design optimized for all devices
- ⚡ Real-time updates with WebSocket connections
- 🎨 Modern UI with Tailwind CSS and custom components
- 🌙 Dark/Light theme support
- 🔄 Progressive Web App (PWA) capabilities

### Web3 Integration
- 🔗 Starknet wallet connection (ArgentX, Braavos)
- 📝 Smart contract interactions for betting
- 🔐 Zero-knowledge proof verification
- 💰 Token balance and transaction management
- 🎫 NFT-based access to premium content

### Football Features
- ⚽ Live scores and match updates
- 📊 Team statistics and analytics dashboard
- 🎥 Exclusive player lifestyle content viewer
- 🏆 Tournament brackets and fixtures
- 📈 Betting interface with real-time odds

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library with concurrent features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components

### Web3 & Blockchain
- **Starknet.js** - Starknet JavaScript SDK
- **get-starknet** - Wallet connection library
- **starknet-react** - React hooks for Starknet

### State Management & Data
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management
- **WebSocket** - Real-time data connections

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Staged file linting

## 🏁 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm/yarn/pnpm package manager
- Git

### Quick Start

1. **Clone the frontend repository:**
```bash
git clone https://github.com/renaissance-org/renaissance-frontend.git
cd renaissance-frontend
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Configure your environment:
```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001

# Starknet Configuration
NEXT_PUBLIC_STARKNET_NETWORK=goerli-alpha
NEXT_PUBLIC_STARKNET_RPC_URL=your_starknet_rpc_url

# Smart Contract Addresses
NEXT_PUBLIC_BETTING_CONTRACT=0x...
NEXT_PUBLIC_CONTENT_CONTRACT=0x...
NEXT_PUBLIC_TOKEN_CONTRACT=0x...

# External APIs
NEXT_PUBLIC_FOOTBALL_API_KEY=your_football_api_key
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure



## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checking
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Web3 Development
npm run compile      # Compile contract ABIs
npm run deploy:local # Deploy to local testnet
```

## 🎯 Key Components Guide

### Web3 Components (`components/web3/`)
- `WalletConnect.tsx` - Wallet connection interface
- `ContractInteraction.tsx` - Smart contract interaction wrapper
- `TransactionStatus.tsx` - Transaction status display

### Football Components (`components/football/`)
- `LiveScore.tsx` - Real-time score display
- `MatchCard.tsx` - Match information card
- `PlayerProfile.tsx` - Player profile component
- `TeamStats.tsx` - Team statistics display

### Betting Components (`components/betting/`)
- `BettingSlip.tsx` - Betting slip interface
- `OddsDisplay.tsx` - Live odds component
- `BetHistory.tsx` - User bet history

## 🔌 API Integration

The frontend communicates with the NestJS backend through:

### REST API Endpoints
```typescript
// Authentication
POST /auth/login
POST /auth/register
GET /auth/profile

// Football Data
GET /matches/live
GET /teams/:id
GET /players/:id

// Betting
POST /bets/place
GET /bets/history
GET /odds/live
```

### WebSocket Events
```typescript
// Real-time updates
'match:update'     // Live score updates
'odds:change'      // Betting odds changes
'bet:placed'       // Bet confirmation
'content:unlock'   // Premium content access
```

## 🎨 Styling Guidelines

### Tailwind Configuration
- Custom color palette for brand identity
- Responsive breakpoints optimized for mobile-first
- Dark mode support with CSS variables

### Component Patterns
- Use `cn()` utility for conditional classes
- Follow atomic design principles
- Implement proper TypeScript props interfaces

## 🧪 Testing Strategy

### Unit Tests
- Component testing with React Testing Library
- Hook testing with custom render utilities
- Utility function testing

### Integration Tests
- API integration testing
- Web3 interaction testing
- User flow testing

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables for Production
Set these in your deployment platform:
```env
NEXT_PUBLIC_API_BASE_URL=https://api.renaissance.football
NEXT_PUBLIC_STARKNET_NETWORK=mainnet-alpha
# ... other production variables
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our coding standards
4. Write tests for new functionality
5. Run linting and tests: `npm run lint && npm run test`
6. Commit with conventional commits: `feat: add amazing feature`
7. Push and create a Pull Request

### Coding Standards
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write unit tests for components and utilities
- Use semantic commit messages
- Update documentation for new features

## 📚 Related Repositories

- **Backend API**: [renaissance-backend](https://github.com/renaissance-org/renaissance-backend) - NestJS API server
- **Smart Contracts**: [renaissance-contracts](https://github.com/renaissance-org/renaissance-contracts) - Cairo smart contracts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Community

- 🐛 **Issues**: Report bugs and request features
- 💬 **Discussions**: Join community discussions
- 🔀 **Pull Requests**: Contribute code improvements
- ⭐ **Star**: Show your support

---

Built with ❤️ for the football community. Powered by Starknet and Only Dust.
