//
//  CoRecordingApp.swift
//  CoRecording
//
//  Created by Carlos Orellana on 21/04/23.
//

import SwiftUI

@main
struct CoRecordingApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
