"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";

export function BookingDeleteAlert({bookingId}) {
    const handleCancle = async ()=>{
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        }) 

        const data = await res.json()
        
        window.location.reload();
    }

  return (
    <AlertDialog>
      <Button variant="danger"> <TrashBin/> Cencel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete . All of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancle} slot="close" variant="danger">
                Cancle
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}