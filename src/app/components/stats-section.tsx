import Link from "next/link";
import { Pizza, Utensils, Clock, Users } from 'lucide-react';

const stats = [
  {
    label: "Professional Chefs",
    value: "420",
    icon: Utensils, // Icon component
  },
  {
    label: "Items of Food",
    value: "320",
    icon: Pizza,
  },
  {
    label: "Years of Experience", // Fixed typo
    value: "30+",
    icon: Clock,
  },
  {
    label: "Happy Customers",
    value: "220",
    icon: Users,
  },
];

export function StatsSection() {
  return (
    <section className="py-12 border-t border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 mb-4">
                {/* Correct dynamic icon usage */}
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
