"use client";

import { useState,useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import axios from "axios";
export default function OpportunityDetailPage(req:any, res: any) {
  // Mock data – replace with API call (fetch /api/projects/[id])
  
  //const { id } = req.query;
  //alert(id);
  //console.log(req.params.id);
  
  const id = req.params.id as string | undefined;

interface Opportunity11 {
  title: string;
  description:  string;
  budgetrange:  number;
  risklevel:  string;
  locationtype:  string;
  address:  string;
  deadlinetoapply: string;
  startdate: string;
  duration:  string;
  eligibilityfilters:  string;
  category_id:  string;
  user_id:  string;
}

   //const [rows, setRows] = useState<Opportunity11[]>([]);
   const [rows, setRows] = useState<Opportunity11 | null>(null);
  
   useEffect(() => {
    axios.get("/api/opportunity/"+id).then((res) => setRows(res.data));
  }, []);
  
  
 
 
  const [opportunity] = useState({
    title: "Opportunity details",
    budgetBracket: "$2k – $5k",
    deadline: "2025-12-15",
    status: "Open",
    description: "We need a modern redesign for our corporate website.",
    requirements:
      "Applicants must have 3+ years in web design. Strong portfolio required.",
    applicants: [
      { name: "Alice Johnson", proposal: "Modern, minimal design…" },
      { name: "John Smith", proposal: "SEO + UX focused approach…" },
    ],
    messages: [
      { author: "Alice", text: "What’s the tech stack requirement?" },
      { author: "Buyer", text: "React/Next.js preferred." },
    ],
    timeline: [
      { action: "Created Project", user: "Buyer", date: "2025-09-01" },
      { action: "Status changed to Open", user: "Buyer", date: "2025-09-02" },
    ],
  });

  return (
    <div className="container max-w-5xl mx-auto py-6">
      {/* --- Summary --- */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{rows?.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2">
          <div>
            <strong>Budget:</strong> {rows?.budgetrange}
          </div>
          <div>
            <strong>Deadline Apply:</strong> {rows?.deadlinetoapply}
			
			
          </div>
          <div>
		
		<strong>Status:</strong> Pending
          </div>
        </CardContent>
      </Card>

      {/* --- Tabs --- */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="qa">Q&amp;A</TabsTrigger>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Description */}
        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>{rows?.description}</CardContent>
          </Card>
        </TabsContent>

        {/* Requirements */}
        <TabsContent value="requirements">
          <Card>
            <CardHeader>
              <CardTitle>Requirements &amp; Eligibility</CardTitle>
            </CardHeader>
            <CardContent>{opportunity.requirements}</CardContent>
          </Card>
        </TabsContent>

        {/* Q&A */}
        <TabsContent value="qa">
          <Card>
            <CardHeader>
              <CardTitle>Q&amp;A</CardTitle>
            </CardHeader>
            <CardContent>
              {opportunity.messages.map((m, i) => (
                <div key={i} className="mb-2">
                  <strong>{m.author}:</strong> {m.text}
                </div>
              ))}
              <Separator className="my-2" />
              <textarea
                placeholder="Ask a question…"
                className="w-full border rounded-md p-2 mb-2"
              />
              <Button>Post</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Applicants – Buyer-only (pretend check) */}
        <TabsContent value="applicants">
          <Card>
            <CardHeader>
              <CardTitle>Applicants</CardTitle>
            </CardHeader>
            <CardContent>
              {opportunity.applicants.map((a, i) => (
                <div key={i} className="mb-3">
                  <strong>{a.name}</strong>
                  <p className="text-sm">{a.proposal}</p>
                  <Separator className="my-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Timeline */}
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              {opportunity.timeline.map((t, i) => (
                <div key={i} className="mb-2 text-sm">
                  <span className="font-medium">{t.action}</span> —{" "}
                  {t.user} ({t.date})
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
