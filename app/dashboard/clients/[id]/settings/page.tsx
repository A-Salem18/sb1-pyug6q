"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function ClientSettings() {
  const params = useParams()
  const clientId = params.id
  const { toast } = useToast()

  const [settings, setSettings] = useState({
    prompt: "Hello, this is AI assistant calling on behalf of [Company Name]. How are you doing today?",
    script: "I'm calling to schedule an appointment for our services. Would you be interested in learning more?",
    maxCallDuration: 300,
    maxAttempts: 3
  })

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    console.log('Saving settings:', settings)
    toast({
      title: "Settings saved",
      description: "Your changes have been successfully saved.",
    })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Client Settings (ID: {clientId})</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="prompt">AI Prompt</Label>
          <Textarea
            id="prompt"
            value={settings.prompt}
            onChange={(e) => setSettings({...settings, prompt: e.target.value})}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="script">Call Script</Label>
          <Textarea
            id="script"
            value={settings.script}
            onChange={(e) => setSettings({...settings, script: e.target.value})}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="maxCallDuration">Max Call Duration (seconds)</Label>
          <Input
            id="maxCallDuration"
            type="number"
            value={settings.maxCallDuration}
            onChange={(e) => setSettings({...settings, maxCallDuration: parseInt(e.target.value)})}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="maxAttempts">Max Call Attempts</Label>
          <Input
            id="maxAttempts"
            type="number"
            value={settings.maxAttempts}
            onChange={(e) => setSettings({...settings, maxAttempts: parseInt(e.target.value)})}
            className="mt-1"
          />
        </div>
        <Button onClick={handleSave}>Save Settings</Button>
      </div>
    </div>
  )
}