"use client"

import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Week 1', calls: 400, appointments: 240 },
  { name: 'Week 2', calls: 300, appointments: 139 },
  { name: 'Week 3', calls: 200, appointments: 980 },
  { name: 'Week 4', calls: 278, appointments: 390 },
  { name: 'Week 5', calls: 189, appointments: 480 },
  { name: 'Week 6', calls: 239, appointments: 380 },
]

export default function ClientAnalytics() {
  const params = useParams()
  const clientId = params.id

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Client Analytics (ID: {clientId})</h2>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Weekly Performance</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="calls" stroke="var(--chart-1)" name="Total Calls" />
              <Line type="monotone" dataKey="appointments" stroke="var(--chart-2)" name="Appointments Booked" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Call Duration Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder for call duration chart</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder for conversion rate chart</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}