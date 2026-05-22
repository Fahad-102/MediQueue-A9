"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export function DeleteAlert({tutor}) {
    const {_id,tutorName} = tutor

    const handleDelete = async () =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${_id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }

        })
        const tutor = await res.json()
        redirect("/tutors")
        console.log(tutor)
    }
  return (
    <AlertDialog>
      <Button  className="text-red-500 border-red-500 flex items-center" variant="outline"> <FaTrash/> Delete Tutor</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Tutor permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{tutorName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}