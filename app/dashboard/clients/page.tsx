"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const initialClients = [
  { id: 1, name: "Acme Corp", email: "contact@acmecorp.com", campaignStatus: "Active" },
  { id: 2, name: "Globex Corporation", email: "info@globex.com", campaignStatus: "Paused" },
  { id: 3, name: "Soylent Corp", email: "hello@soylent.com", campaignStatus: "Completed" },
]

export default function ClientsPage() {
  const [clients, setClients] = useState(initialClients)
  const [newClient, setNewClient] = useState({ name: '', email: '', campaignStatus: 'Active' })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleAddClient = () => {
    if (newClient.name && newClient.email) {
      setClients([...clients, { ...newClient, id: clients.length + 1 }])
      setNewClient({ name: '', email: '', campaignStatus: 'Active' })
      setIsDialogOpen(false)
      toast({
        title: "Client added",
        description: `${newClient.name} has been added to your client list.`,
      })
    }
  }

  const handleDeleteClient = (id: number) => {
    setClients(clients.filter(client => client.id !== id))
    toast({
      title: "Client removed",
      description: "The client has been removed from your list.",
      variant: "destructive",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Clients</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Client</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
              <DialogDescription>
                Enter the details of the new client here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newClient.name}
                  onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={newClient.email}
                  onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddClient}>Save Client</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Campaign Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.campaignStatus}</TableCell>
                <TableCell>
                  <Button variant="outline" className="mr-2" asChild>
                    <Link href={`/dashboard/clients/${client.id}`}>View</Link>
                  </Button>
                  <Button variant="ghost" onClick={() => handleDeleteClient(client.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}