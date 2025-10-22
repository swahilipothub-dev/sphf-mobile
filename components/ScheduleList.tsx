import React, { useMemo, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export type Session = {
  id: string;
  time: string;
  title: string;
  speakerId?: string;
  location?: string;
  tag?: string;
};

export type DaySchedule = {
  id: string;
  date: string;
  sessions: Session[];
};

const SCHEDULE: DaySchedule[] = [
  {
    id: 'day1',
    date: 'Day 1 — Monday, 27th October 2025',
    sessions: [
      { id: 'd1s1', time: '05:30 - 07:00', title: 'Fuel Your Fire: Morning Workouts for Pwani Innovators', location: 'Utamaduni Grounds' },
      { id: 'd1s2', time: '09:30 - 11:00', title: 'The Kick-Off Show — Pwani Culture & Utamaduni Village Showcase', location: 'Main Hall' },
      {
        id: 'd1s3',
        time: '11:00 - 12:45',
        title: 'Money Moves: Smart Strategies for Saving, Investing & Building Wealth',
        tag: 'Youth Agency',
        location: 'Auditorium',
      },
      {
        id: 'd1s4',
        time: '11:00 - 12:45',
        title: 'Blockchain for Coastal Trade & Blue Economy',
        tag: 'Digital',
        location: 'Workshop Room A',
      },
      {
        id: 'd1s5',
        time: '11:00 - 12:45',
        title: 'Sustainable Aquaculture Value Chains: Youth-Led Innovations',
        tag: 'Sustainable Economy',
        location: 'Room B',
      },
    ],
  },
  {
    id: 'day2',
    date: 'Day 2 — Tuesday, 28th October 2025',
    sessions: [
      { id: 'd2s1', time: '05:30 - 07:00', title: 'Fuel Your Fire: Morning Workouts for Pwani Innovators', location: 'Utamaduni Grounds' },
      { id: 'd2s2', time: '09:00 - 11:00', title: 'Official Opening Ceremony & Keynote Addresses', location: 'Main Hall' },
      { id: 'd2s3', time: '11:15 - 13:00', title: 'Plenary — Pwani’s Economic Future: Strategies from EDIC', location: 'Auditorium' },
      { id: 'd2s4', time: '13:00 - 14:00', title: 'Lunch Break' },
      { id: 'd2s5', time: '14:00 - 15:00', title: 'Thriving Minds, Strong Futures: Youth Mental Health & Well-being', location: 'Auditorium' },
      {
        id: 'd2s6',
        time: '15:15 - 16:45',
        title: 'From Idea to Impact: Nurturing Youth-Led Startups & Social Enterprises',
        tag: 'Youth Agency',
        location: 'Workshop Room A',
      },
      {
        id: 'd2s7',
        time: '15:15 - 16:45',
        title: 'Building a Sustainable Future through the Creative Gig Economy',
        tag: 'Sustainable Economy',
        location: 'Room B',
      },
      {
        id: 'd2s8',
        time: '15:15 - 16:45',
        title: 'Defending Youth & SMEs Against Digital Threats in East Africa',
        tag: 'Digital',
        location: 'Auditorium',
      },
      { id: 'd2s9', time: '17:00 - 17:45', title: 'Sundowner — Blue Economy in Action: Dhow Experience', location: 'Waterfront' },
      { id: 'd2s10', time: '17:00 - 19:00', title: 'Konga za Tamaduni — Ngoma Ilie Tena: Kazi kwa Kizazi', location: 'Main Stage' },
    ],
  },
  {
    id: 'day3',
    date: 'Day 3 — Wednesday, 29th October 2025',
    sessions: [
      { id: 'd3s1', time: '05:30 - 07:00', title: 'Fuel Your Fire: Morning Workouts for Pwani Innovators', location: 'Utamaduni Grounds' },
      {
        id: 'd3s2',
        time: '09:00 - 10:30',
        title: 'Becoming: The Journey of Growth & Self-Discovery',
        tag: 'Youth Journey',
        location: 'Main Hall',
      },
      {
        id: 'd3s3',
        time: '10:45 - 12:00',
        title: 'Navigating the Shift Towards the Circular Economy',
        tag: 'Sustainable Economy',
        location: 'Auditorium',
      },
      {
        id: 'd3s4',
        time: '10:45 - 12:00',
        title: 'The Unseen Edge: Mastering Power Skills for Pwani’s Future Leaders',
        tag: 'Youth Agency',
        location: 'Workshop Room A',
      },
      { id: 'd3s5', time: '12:00 - 13:30', title: 'Connectivity', tag: 'Digital', location: 'Room B' },
      {
        id: 'd3s6',
        time: '12:00 - 13:30',
        title: 'Building Your Brand: Digital Presence & Professional Pathways',
        tag: 'Youth Agency',
        location: 'Workshop Room A',
      },
      { id: 'd3s7', time: '13:30 - 14:00', title: 'Lunch Break' },
      {
        id: 'd3s8',
        time: '14:00 - 16:30',
        title: 'The Case Management Journey & Awards Ceremony',
        tag: 'Youth Agency',
        location: 'Main Hall',
      },
      { id: 'd3s9', time: '19:00 - 22:00', title: 'Gala Dinner — Re-imagining Connections', location: 'Banquet Hall' },
    ],
  },
  {
    id: 'day4',
    date: 'Day 4 — Thursday, 30th October 2025',
    sessions: [
      { id: 'd4s1', time: '05:30 - 07:00', title: 'Fuel Your Fire: Morning Workouts for Pwani Innovators', location: 'Utamaduni Grounds' },
      {
        id: 'd4s2',
        time: '09:00 - 10:30',
        title: 'Youth & National Affairs: Rethinking Governance & Economic Futures',
        tag: 'Youth Agency',
        location: 'Main Hall',
      },
      { id: 'd4s3', time: '10:45 - 12:00', title: 'Security Awareness', tag: 'Digital', location: 'Workshop Room A' },
      {
        id: 'd4s4',
        time: '10:45 - 12:00',
        title: 'Coastal Circular Economy: Innovating Waste-to-Wealth Solutions',
        tag: 'Sustainable Economy',
        location: 'Auditorium',
      },
      {
        id: 'd4s5',
        time: '10:45 - 12:00',
        title: 'Intellectual Property Rights & Legalisation of Startups',
        tag: 'Youth Journey',
        location: 'Workshop Room B',
      },
      { id: 'd4s6', time: '12:00 - 13:15', title: 'Investing 101: Simple Strategies for Building Wealth', location: 'Auditorium' },
      { id: 'd4s7', time: '13:45 - 14:00', title: 'Lunch Break' },
      {
        id: 'd4s8',
        time: '14:00 - 16:00',
        title: 'Deals Den — Investing in Blue Economy Innovation',
        tag: 'Sustainable Economy',
        location: 'Main Hall',
      },
      { id: 'd4s9', time: '16:00 - 17:00', title: 'Official Closing Ceremony & Networking Cocktail', location: 'Auditorium' },
    ],
  },
  {
    id: 'day5',
    date: 'Day 5 — Friday, 31st October 2025',
    sessions: [
      { id: 'd5s1', time: '05:30 - 07:00', title: 'Fuel Your Fire: Morning Workouts for Pwani Innovators', location: 'Utamaduni Grounds' },
      {
        id: 'd5s2',
        time: '10:00 - 13:00',
        title: 'Distributing Coastal Creativity Beyond Borders',
        tag: 'Sustainable Economy',
        location: 'Main Hall',
      },
      { id: 'd5s3', time: '14:00 - 16:00', title: 'PGT Sound Check', location: 'Main Stage' },
      { id: 'd5s4', time: '17:00 - 00:00', title: 'Pwani Got Talent — The Experience', location: 'Main Stage' },
    ],
  },
];

const tagColors: Record<string, string> = {
  'Youth Agency': 'bg-green-100 text-green-800',
  'Digital': 'bg-blue-100 text-blue-800',
  'Sustainable Economy': 'bg-yellow-100 text-yellow-800',
  'Youth Journey': 'bg-purple-100 text-purple-800',
};

const DayTab = ({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} className={`px-3 py-2 rounded-full ${active ? 'bg-[#e97b35]' : 'bg-gray-100'}`}>
    <Text className={`${active ? 'text-white' : 'text-gray-700'} text-sm font-medium`}>{label}</Text>
  </TouchableOpacity>
);

export const ScheduleList = () => {
  const [dayIndex, setDayIndex] = useState(0);
  const day = useMemo(() => SCHEDULE[dayIndex], [dayIndex]);

  return (
    <View className="flex-1 bg-white">
      <View className="px-4 pt-4">
        <Text className="text-xl font-bold text-gray-900">Schedule</Text>
        <Text className="text-sm text-gray-600">Pwani Innovation Week — 5 days</Text>
      </View>

      <View className="px-4 py-3">
        <View className="flex-row flex-wrap gap-2">
          {SCHEDULE.map((d, idx) => (
            <DayTab
              key={d.id}
              label={`Day ${idx + 1}`}
              active={idx === dayIndex}
              onPress={() => setDayIndex(idx)}
            />
          ))}
        </View>
      </View>

      <FlatList
        data={day.sessions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ListHeaderComponent={() => (
          <View className="py-2">
            <Text className="text-base font-semibold text-gray-800">{day.date}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-[1px] bg-gray-200" />}
        renderItem={({ item }) => (
          <View className="py-4">
            <Text className="text-sm text-gray-600">
              {item.time}
              {item.location ? ` • ${item.location}` : ''}
            </Text>
            <Text className="mt-1 text-base font-semibold text-gray-900">{item.title}</Text>
            {item.tag && (
              <View
                className={`mt-1 self-start rounded-full px-2 py-[2px] ${tagColors[item.tag] || 'bg-gray-100 text-gray-700'}`}>
                <Text className="text-xs font-medium">{item.tag}</Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};
