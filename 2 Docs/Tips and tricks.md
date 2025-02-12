# Backend search Strategies

```js
{
  "production_backend_projects": [
    {
      "name": "Strapi",
      "tech_stack": "Node.js, Express.js, GraphQL",
      "github_link": "https://github.com/strapi/strapi"
    },
    {
      "name": "Ghost CMS",
      "tech_stack": "Node.js, Express.js, MySQL",
      "github_link": "https://github.com/TryGhost/Ghost"
    },
    {
      "name": "Hasura",
      "tech_stack": "GraphQL, PostgreSQL",
      "github_link": "https://github.com/hasura/graphql-engine"
    },
    {
      "name": "Directus",
      "tech_stack": "Node.js, PostgreSQL",
      "github_link": "https://github.com/directus/directus"
    }
  ],
  "search_tricks": {
    "general_search": "backend language:JavaScript stars:>500",
    "express_api_search": "express.js api backend language:JavaScript stars:>300",
    "nextjs_backend_search": "nextjs backend language:JavaScript stars:>200",
    "nestjs_backend_search": "nestjs production backend language:TypeScript stars:>500",
    "search_inside_code": [
      {
        "query": "\"app.post(\" language:JavaScript",
        "description": "Finds all Express.js projects using API routes."
      },
      {
        "query": "\"const mongoose = require('mongoose')\" language:JavaScript",
        "description": "Finds projects using MongoDB with Mongoose."
      },
      {
        "query": "\"app.use(cors())\" language:JavaScript",
        "description": "Finds backend projects handling CORS."
      }
    ],
    "feature_based_search": [
      {
        "feature": "JWT Authentication System",
        "query": "jwt authentication backend language:JavaScript stars:>200"
      },
      {
        "feature": "Role-Based Access Control (RBAC)",
        "query": "rbac authentication backend language:JavaScript stars:>50"
      },
      {
        "feature": "WebSocket Chat Server",
        "query": "websocket chat backend language:JavaScript stars:>100"
      },
      {
        "feature": "Stripe Payment API",
        "query": "stripe payment gateway backend language:JavaScript stars:>100"
      },
      {
        "feature": "MongoDB Database API",
        "query": "mongodb api backend language:JavaScript stars:>200"
      }
    ],
    "company_backend_repos": [
      {
        "company": "Airbnb",
        "query": "org:airbnb backend"
      },
      {
        "company": "Netflix",
        "query": "org:Netflix backend"
      },
      {
        "company": "Uber",
        "query": "org:uber backend"
      }
    ],
    "github_topics": [
      "https://github.com/topics/backend",
      "https://github.com/topics/api"
    ]
  }
}

```

# Framer
```JS
{
  "production_animation_projects": [
    {
      "name": "Strapi UI",
      "tech_stack": "Node.js, Express.js, GraphQL, Framer Motion",
      "github_link": "https://github.com/strapi/strapi"
    },
    {
      "name": "Ghost UI",
      "tech_stack": "Node.js, Express.js, MySQL, Framer Motion",
      "github_link": "https://github.com/TryGhost/Ghost"
    },
    {
      "name": "Hasura Dashboard",
      "tech_stack": "GraphQL, PostgreSQL, Framer Motion",
      "github_link": "https://github.com/hasura/graphql-engine"
    },
    {
      "name": "Directus Admin Panel",
      "tech_stack": "Node.js, PostgreSQL, Framer Motion",
      "github_link": "https://github.com/directus/directus"
    }
  ],
  "search_tricks": {
    "general_search": "framer-motion animation language:JavaScript stars:>500",
    "page_transition_search": "framer-motion page transition language:JavaScript stars:>300",
    "3d_animation_search": "framer-motion 3d animation language:JavaScript stars:>300",
    "scroll_animation_search": "framer-motion scroll animation language:JavaScript stars:>300",
    "staggered_animation_search": "framer-motion stagger animation language:JavaScript stars:>200",
    "search_inside_code": [
      {
        "query": "\"import { motion } from 'framer-motion'\" language:JavaScript",
        "description": "Finds projects that import and use Framer Motion for animations."
      },
      {
        "query": "\"motion.div\" language:JavaScript",
        "description": "Finds projects using Framer Motion's `motion.div` for container animations."
      },
      {
        "query": "\"motion.section\" language:JavaScript",
        "description": "Finds projects using `motion.section` for section-based animations."
      }
    ],
    "company_animation_repos": [
      {
        "company": "Airbnb",
        "query": "org:airbnb framer-motion"
      },
      {
        "company": "Netflix",
        "query": "org:Netflix framer-motion"
      },
      {
        "company": "Uber",
        "query": "org:uber framer-motion"
      }
    ],
    "github_topics": [
      "https://github.com/topics/framer-motion",
      "https://github.com/topics/animation"
    ]
  }
}

```

